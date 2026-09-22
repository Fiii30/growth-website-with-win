const livechats = [
    {
        id: 1,
        name: 'Pai100',
        email: 'paipai100aja@gmail.com',
        commant: 'Ayolah kita turing rame-rame'
    },    
    {
        id: 2,
        name: 'Hanzwin',
        email: 'hansipp@gmail.com',
        commant: 'gass!'
    },
    {
        id: 3,
        name: 'Mamans',
        email: 'mamasukamotoran@gmail.com',
        commant: 'atur tanggal dulu mas'
    },

]

function uploadchat(){
    const container = document.getElementById('chat-user')

    let chatting = '';

    for (let i = 0; i < livechats.length; i++){
        const livechat = livechats[i]

        chatting += `
            <div class="user">
                <p class="user-name">${livechat.name}</p>
                <p class="user-email">${livechat.email}</p>
            </div>
            <p class="comment">${livechat.commant}</p>
            <div class="btn-action">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        `
    }
    container.innerHTML = chatting;
}
uploadchat();

const form = document.getElementById('formcommunity')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const commant = document.getElementById('message').value;

    const newchat = {
        id: livechats.length + 1,
        name: name,
        email: email,
        commant: commant

    };
    livechats.push(newchat);
    uploadchat();
})