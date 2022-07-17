const Bio = ()=>{
    const name = localStorage.getItem('name')

    return`
    <section class="bio">
        <div class="profile-photo">
            <img src="/images/deola.jpg" width="130px" alt="" srcset="">
        </div>
        <div class="profile-info">
            <p class="username">${name}</p>
            <p class="about">Hi, I am Dee and I am a software engineer</p>
            <button>Follow</button>
        </div>

        <form action="" class="edit-bio-form">
            <input type="text" name="" placeholder="Name" id="name">
            <button type="submit">Submit</button>
        </form>
    </section>
    `
}


export default Bio