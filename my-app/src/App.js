import React, { useState, useEffect } from 'react';
import './App.css';
import keikoku from './kkrn_icon_chui_1.png';

function App() {
  const [time, setTime] = useState(180000); // Initial value set to 3 minutes (in milliseconds)
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 10); // Decrease time by 10 milliseconds
    }, 10); // Update every 10 milliseconds

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Check if time is a multiple of 10000 milliseconds (10 seconds)
    if (time % 10000 === 0 && time !== 0) {
      // Display alert every 10 seconds
      alert(`${formatTime(time)}後にデータを削除します`);
    }
  }, [time]); // Run this effect whenever 'time' changes

  // Function to format the remaining time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000); // Convert milliseconds to minutes
    const seconds = Math.floor((time % 60000) / 1000); // Convert remaining milliseconds to seconds
    const milliseconds = Math.floor((time % 1000) / 10); // Get remaining milliseconds
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Do something with the form data (e.g., send it to a server)
    // For now, just display an alert indicating registration completion
    alert("登録完了しました");
    // Optionally, reset the form fields
    setSubject('');
    setName('');
    setEmail('');
    setPhoneNumber('');
    setInquiry('');
  }

  // Function to simulate virus scan
  const startScan = () => {
    setScanning(true);
    setTimeout(() => {
      const result = "ウイルスが検出されました！";
      setScanResult(result);
      setScanning(false);
    }, 3000); // Simulate scan for 3 seconds
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <div className="warning-container">
        <img src={keikoku} className='keikoku' />
        <div className="warning-message">
          <h1 className='title'>ウイルスに感染しました</h1>
          <p>{formatTime(time)}後にPC内のデータがフォーマットされます</p>
        </div>
        <img src={keikoku} className='keikoku' />
      </div>
      <p className="warning">パソコンに保存されている大切なデータが消えるかもしれません。</p>
      <p className="warning">ウイルスに感染している可能性があります。</p>
      <p className="note">注意：このウイルスは非常に危険です。ウイルス対策ソフトウェアを使用してください。</p>
      <p>お急ぎください！</p>
      <p>ウイルススキャンを実行してください！</p>
      <p>今すぐお問い合わせをいただくか、下記の電話番号まで電話をしてください</p>
      <p>電話番号：012-3456-7890</p>
      <p>営業時間：9:00-18:00</p>
      <div>
        <p className='mini-text'>※お問い合わせは24時間受け付けております</p>
        <p className='mini-text'>※お問い合わせ内容によっては対応できない場合がございます</p>
        <p className='mini-text'>※お問い合わせ内容によってはデータが即座に削除される場合がございます</p>
      </div>
      <div className="scan-section">
        <button onClick={startScan} disabled={scanning}>
          {scanning ? "スキャン中..." : "ウイルススキャンを実行"}
        </button>
        {scanResult && <p>{scanResult}</p>}
      </div>
      <div className="contact-form">
        <h2>お問い合わせフォーム</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">件名</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">名前</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">電話番号</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inquiry">お問い合わせ内容</label>
            <textarea
              id="inquiry"
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
            />
          </div>
          <button type="submit">送信</button>
        </form>
      </div>


    </div>
  );
}

export default App;
