import './App.css'
export function App () {
    return (
        <article className="app-FollowCard">
            <header className='app-FollowCard-header'>
                <img className='app-FollowCard-avatar' src="https://yt3.ggpht.com/isFkTVuwpyvifmlA1NOOgDKWBLcEhJb50fixXchiri0o9wgBAbE4tcP5ijknQKgcF6X3UuSWYi4=s600-c-k-c0x00ffffff-no-rj-rp-mo" alt="Profile Image" />
                <div className='app-FollowCard-userInfo'>
                    <strong className='app-FollowCard-name'>Alexey Martínez</strong>
                    <span className='app-FollowCard-user'>@soyL_6</span>
                </div>
            </header>

            <aside className='app-FollowCard-aside'>
                <button className='app-FollowCard-button'>Follow</button>
            </aside>
        </article>
    )
}