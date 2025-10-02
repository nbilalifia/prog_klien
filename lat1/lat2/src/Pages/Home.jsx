// react itu bungkus HTML ke dalam javascript
// 1 file jsx itu punya 1 function utama
// 1 function utama dinyatakan dengan default
// 1 function harus return 1 tag, tidak boleh lebih


function Home() {
    return  <div>
                <Judul />
                <Isi />
            </div>;
}

function Judul() {
    return <h1> Selamat datang</h1>;
}

function Isi() {
    return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos, quia, quis officia quisquam nesciunt nihil minima suscipit aut architecto, fugit ipsum iusto rem. Voluptatum animi ducimus voluptatem facere architecto.</p>;
}

export default Home;