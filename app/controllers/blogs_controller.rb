class BlogsController < ApplicationController
  before_action :authenticate_user!
  before_action :redirect_to_index

  def index
    @blog = Blog.new
    @blogs = Blog.all.order(created_at: "ASC").limit(10)
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      redirect_to blogs_path, notice: 'Blogが保存されました'
    else
      flash.now[:alert] = 'メッセージを入力してください。'
      render action: :index
      # 「action: :new」は省略形の「:new」でもOK
    end
  end

  def edit
  end

  def update
    @blog = Blog.all.find(params[:id])
    @blog.content = params[:content]
    if @blog.save
      respond_to do |format|
        format.html  { redirect_to blogs_path, notice: 'Blogが編集されました' }
        format.json
      end
    end
  end

  def destroy
    blog = Blog.find(id_params[:id])
    blog.destroy if blog.user_id == current_user.id
    redirect_to blogs_path, notice: 'Blogが削除されました'
  end

  private
  def blog_params
    params.require(:blog).permit(:content, :image).merge(user_id: current_user.id)
  end

  def id_params
    params.permit(:id)
  end

  def redirect_to_index
    redirect_to root_path unless user_signed_in?
  end
end
