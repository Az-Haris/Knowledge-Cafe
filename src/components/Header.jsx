import profile from '../../public/img/profile.png'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-5'>
            <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;