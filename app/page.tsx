function HomePage() {
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-4xl">Welocome to My App</h1>
        <p className="text-lg mt-2">
          นี่คือ Next.js ที่เขียนเพื่อการเรียน</p>
      </div>
      <div>
        <h1 className="text-center mt-6 p-4 "></h1>
        <a href="/light">บทเรียนที่ 1 State ของการเปิด/ปิด</a>
        <br></br>
        <a href="/count">บทเรียนที่ 2 State ของการเพิ่มลดตัวเลข</a>
        <br></br>
        <a href="/form">บทเรียนที่ 3 State ของการลงทะเบียน</a>
        <br></br>
        <a href="/hidetext">บทเรียนที่ 4 State ของการแสดง/ซ่อน ข้อความ</a>
        <br></br>
        <a href="/jikan">บทเรียนที่ 5 API Jikan</a>
        <br></br>
        <a href="/steam">บทเรียนที่ 6 API Steam</a>
        <br></br>
        <a href="/new">บทเรียนที่ 7 API News</a>
        <br></br>
      </div>
    </div>

  );
}

export default HomePage;