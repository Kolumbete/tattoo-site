body {
    font-family: 'Tilda Sans', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #111;
    color: #fff;
}

header {
    position: fixed;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    z-index: 1000;
}

.hero {
    height: 100vh;
    background: url("../images/hero.jpg") center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

h2 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
}

#portfolio img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

#portfolio img:hover {
    transform: scale(1.05);
}

.btn {
    padding: 10px 20px;
    background: #ff0055;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
}

.btn:hover {
    background: #e6004a;
}