
const button = document.getElementById('login')
const button_div = document.getElementById('login-li')
window.addEventListener('load', function e() {
    const code = location.href.substring(location.href.indexOf("code") + 5, location.href.length)
    const data = new FormData();
    data.append('client_id', '886619489997848596');
    data.append('client_secret', 'I203Rng3ZRdLpc6xZYnb-fe_-B6eY9MH');
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', "http://127.0.0.1:5501/index.html");
    data.append('scope', 'identify');
    data.append('code', code);
    if (location.href.indexOf("code") > -1) {
        fetch('https://discordapp.com/api/oauth2/token', { method: 'POST', body: data }).then(res => res.json())
        .then(data => {
            fetch('https://discordapp.com/api/users/@me', { headers: { 'Authorization': `Bearer ${data.access_token}` } }).then(res => res.json()).then(stuff => {
            
                console.log(stuff)
                if (`${stuff.username}#${stuff.discriminator}` === 'undefined#undefined') {
                    //bruh
                }
                else {
                    
                    button.innerHTML = `${stuff.username}#${stuff.discriminator}`
                    button.href = '#'
                    const image = document.createElement('img')
                    const arrow = document.createElement('i')
                    image.src = `https://images.discordapp.net/avatars/${stuff.id}/${stuff.avatar}.png`
                    image.classList.add('login-av')
                    arrow.classList.add('fa')
                    arrow.classList.add('fa-angle-down')
                    button.appendChild(image)
                    button.appendChild(arrow)
                }
                
                
            })
        })
    }
    
})