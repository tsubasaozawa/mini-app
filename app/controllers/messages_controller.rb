class MessagesController < ApplicationController
  def index
    @blog = Blog.new
    @blogs = Blog.all.order(created_at: "ASC").limit(10)
  end
end
