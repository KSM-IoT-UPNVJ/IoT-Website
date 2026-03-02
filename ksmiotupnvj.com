server {

        root /var/www/frontend/app;
        index index.html index.htm index.nginx-debian.html;

        server_name ksmiotupnvj.com  www.ksmiotupnvj.com;

        location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        }

        location /_next/static/ {
        alias /var/www/frontend/app/.next/static/;
        expires 1y;
        access_log off;
        add_header Cache-Control "public, immutable";
    }

        location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/ksmiotupnvj.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/ksmiotupnvj.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = www.ksmiotupnvj.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = ksmiotupnvj.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        listen 80;
        listen [::]:80;

        server_name ksmiotupnvj.com  www.ksmiotupnvj.com;
    return 404; # managed by Certbot




}