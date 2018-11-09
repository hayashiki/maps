# Handles all JSON Web Tokens used by the app. A simple wrapper for the JWT class.
# This class can be used like the following:
# - Create JWT with `JsonWebToken.encode({ user_id: 1, entity_id: 1 })`
# - Use JWT within 24 hours, no problem with `JsonWebToken.decode(token)`
# - Try to use JWT 48 hours later, JsonWebToken.expired(token) will return `true`
# - You can refresh the token with JsonWebToken.refresh(token)
# - Using a token after the `exp` claim will always be rejected with `JsonWebToken.decode(token)`
class JsonWebToken
  # Encode the token
  # @param {Hash} The payload to be tokenized
  # @return {string}
  def self.encode(payload)
    payload.reverse_merge!(meta)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  # Decode the token
  # @param {string} The token to be decoded
  # @return {Hash}
  def self.decode(token)
    JWT.decode(token, Rails.application.secrets.secret_key_base, true)
  end

  # Refresh the token. The new token expires after 1 day.
  # @param {Hash} The payload of the token to refresh
  # @return {string}
  def self.refresh(payload)
    payload.merge!(meta)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  # Validates the payload hash for expiration and meta claims
  # @param {Hash} The payload to verify
  # @param {boolean}
  def self.valid_payload(payload)
    return false if expired(payload) || payload['iss'] != meta[:iss] || payload['aud'] != meta[:aud]
    true
  end

  # Default options to be encoded in the token
  # @return {Hash}
  def self.meta
    {
      exp: 30.days.from_now.to_i,
      iat: Time.zone.now.to_i,
      iss: 'maps',
      aud: 'client'
    }
  end

  # Validates if the token is expired by iat parameter
  # @param {Hash} The payload to check
  # @return {boolean}
  def self.expired(payload)
    Time.zone.at(payload['iat']) + 1.day < Time.zone.now
  end

  # Checks if the token is still refreshable
  # @param {Hash} The payload to check
  # @return {boolean}
  def self.still_refreshable(payload)
    expire_time = Time.zone.at(payload['exp'])
    expire_time > Time.zone.now
  end
end
