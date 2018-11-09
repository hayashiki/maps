class HashSerializer
  def self.dump(hash)
    hash
  end

  def self.load(hash)
    ActiveSupport::HashWithIndifferentAccess.new(hash)
  end
end
