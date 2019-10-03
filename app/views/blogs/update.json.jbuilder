json.id  @blog.id
json.name  @blog.user.name
json.created_at  @blog.created_at.strftime("%Y/%m/%d %H:%M") 
json.content  @blog.content