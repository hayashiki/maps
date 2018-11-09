# Use the `fog` gem to set up Paperclip attachments. Use AWS credentials if they exist,
# otherwise fall back to using Google Cloud Storage credentials if they exist.
# @see https://github.com/fog/fog
# @see https://github.com/thoughtbot/paperclip
if ENV['AWS_BUCKET']
  s3_credentials = {
    access_key_id: ENV.fetch('AWS_ACCESS_KEY_ID'),
    secret_access_key: ENV.fetch('AWS_SECRET_ACCESS_KEY')
  }

  Paperclip::Attachment.default_options.merge!(
    s3_credentials: s3_credentials,
    s3_region: ENV.fetch('AWS_REGION'),
    bucket: ENV.fetch('AWS_BUCKET'),
    url: ':s3_alias_url',
    path: '/:class/:attachment/:id_partition/:style/:filename',
    storage: :s3,
    s3_host_alias: 'assets.harvestprofit.com'
  )
end
