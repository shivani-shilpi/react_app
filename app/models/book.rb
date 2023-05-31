class Book < ApplicationRecord
    has_one_attached :image

    def image_url
      Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end
    
    # def image_url
    #     Rails.application.routes.url_helpers.rails_blob_path(self.image, only_path: true)
    # end

end
