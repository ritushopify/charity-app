require_relative 'boot'

require 'rails/all'

# Rails.application.config.user_key="767217d273a5d0194a2a611a378fc990"

module CharityApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Require the gems listed in Gemfile, including any gems
    # you have ve limited to :test, :development, or :production.
    
    Bundler.require(*Rails.groups)

    # CORS config to allow ajax
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :options]
      end
    end
    

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
