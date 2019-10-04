json.name @blog.user.name
json.created_at @blog.created_at.strftime("%Y/%m/%d %H:%M")
json.content @blog.content
json.image @blog.image.url
json.id @blog.id