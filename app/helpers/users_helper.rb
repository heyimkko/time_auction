module UsersHelper

  def profile_pic(user, width = 200, height = 200)
    if user.photo_url
      cl_image_tag user.photo_url, :width => width, :height => height, :crop => :thumb
    else
      cl_image_tag 'v1366177656/blank_avatar_lg_j0an0b.jpg', :width => width, :height => height, :crop => :thumb
    end
  end

  def navatar(user, options = {})
    height = options.fetch(:height, 25)
    width = options.fetch(:width, 25)
    link_id = options.fetch(:link_id, "navName")
    
    if user.admin
      admin_note = "<span id=\"adminNote\">*</span>".html_safe
    else
      admin_note = ""
    end

    if user.photo_url
      link = link_to (cl_image_tag current_user.photo_url,#.gsub('large', 'square'), 
        :width => width, :height => height, 
        :gravity => :face, :crop => :thumb) + current_user.name.split(" ").first, 
        user_path(current_user), :id => link_id
      link + admin_note
    else
      link = link_to (cl_image_tag 'v1366177656/blank_avatar_lg_j0an0b.jpg', 
        :width => width, :height => height, 
        :gravity => :face, :crop => :thumb) + current_user.name.split(" ").first, 
        user_path(current_user), :id => link_id
      link + admin_note
    end
  end

  def avatar(user, options = {})
    height = options.fetch(:height, 48)
    width = options.fetch(:width, 48)
    
    if user.photo_url
      link_to (cl_image_tag user.photo_url,#.gsub('large', 'square'), 
        :width => width, :height => height, 
        :gravity => :face, :crop => :thumb), user
    else
      link_to (cl_image_tag 'v1366177656/blank_avatar_lg_j0an0b.jpg', 
        :width => width, :height => height, 
        :gravity => :face, :crop => :thumb), user
    end
  end
end
