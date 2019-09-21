FROM nginx

COPY docs/.vuepress/dist /usr/share/app/src/dist/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]