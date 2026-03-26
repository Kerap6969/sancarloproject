import React, { useState, useEffect } from 'react';

// Чиний index.html дээрх менюний өгөгдөл
const menuData = {
  food: [
    {icon:'🍕',name:'Pizza',price:'20,000₮',note:'Margherita / BBQ Chicken'},
    {icon:'🍔',name:'Burger',price:'18,000₮',note:'Classic / Cheese / Mushroom'},
    {icon:'🥪',name:'Sandwich',price:'14,000₮',note:'Club / BLT'},
    {icon:'🍗',name:'Wings',price:'22,000₮',note:'6 ширхэг · Buffalo / Honey'},
    {icon:'🍟',name:'Fries',price:'8,000₮',note:'Classic / Loaded cheese'},
    {icon:'🥗',name:'Salad',price:'16,000₮',note:'Caesar / Greek'},
  ],
  drinks: [
    {icon:'🍺',name:'Draft Beer',price:'9,000₮',note:'Монгол / Импортын'},
    {icon:'🥃',name:'Whiskey',price:'18,000₮',note:"Jack Daniel's / Jameson"},
    {icon:'🍹',name:'Cocktail',price:'16,000₮',note:'Mojito / Long Island / Mai Tai'},
    {icon:'🥤',name:'Soft Drinks',price:'5,000₮',note:'Cola / Sprite / Juice'},
    {icon:'☕',name:'Coffee',price:'7,000₮',note:'Americano / Latte'},
    {icon:'🍾',name:'Bottle Service',price:'от 80,000₮',note:'Vodka / Whiskey / Wine'},
  ],
  snacks: [
    {icon:'🧀',name:'Cheese Platter',price:'25,000₮',note:'3 төрлийн бяслаг'},
    {icon:'🍫',name:'Chocolate Fondue',price:'20,000₮',note:'Жимстэй'},
    {icon:'🥜',name:'Mixed Nuts',price:'8,000₮',note:'Давсалсан / Пиво'},
    {icon:'🍿',name:'Popcorn',price:'5,000₮',note:'Давслаг / Чихэрлэг'},
  ]
};

function App() {
  const [activePage, setActivePage] = useState('home');
  const [menuTab, setMenuTab] = useState('food');
  const [submitted, setSubmitted] = useState(false);

  // Хуудас солиход дээшээ гүйлгэх
  const showPage = (id) => {
    setActivePage(id);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const submitBooking = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#080808] text-[#f5f5f0] font-sans min-h-screen selection:bg-[#C9A84C] selection:text-[#080808]">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-5 bg-[#080808]/92 backdrop-blur-md border-b border-[#C9A84C]/15">
        <div className="font-serif text-2xl font-bold text-[#C9A84C] tracking-wider uppercase">
          SAN <span className="italic font-normal">Carlo</span>
        </div>
        <div className="hidden md:flex gap-9">
          {['home', 'rooms', 'menu', 'booking'].map((page) => (
            <button
              key={page}
              onClick={() => showPage(page)}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border-b pb-1 ${
                activePage === page ? 'text-[#C9A84C] border-[#C9A84C]' : 'text-white border-transparent hover:text-[#C9A84C]'
              }`}
            >
              {page === 'home' ? 'Нүүр' : page === 'rooms' ? 'VIP Өрөө' : page === 'menu' ? 'Меню' : 'Захиалга'}
            </button>
          ))}
        </div>
      </nav>

      {/* HOME PAGE */}
      {activePage === 'home' && (
        <div className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,_rgba(201,168,76,0.07)_0%,_transparent_65%)]"></div>
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-6">Улаанбаатар — VIP Lounge</p>
          <h1 className="font-serif text-6xl md:text-9xl font-bold mb-4 uppercase">San <span className="italic text-[#C9A84C]">Carlo</span></h1>
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-gray-500 mb-12">Billiard · Karaoke · Lounge · VIP</p>
          <div className="flex gap-4">
            <button onClick={() => showPage('booking')} className="px-8 py-3 bg-[#C9A84C] text-[#080808] text-[10px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#C9A84C] border border-[#C9A84C] transition-all">Өрөө захиалах</button>
            <button onClick={() => showPage('rooms')} className="px-8 py-3 border border-[#C9A84C]/40 text-[10px] font-bold uppercase tracking-widest hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">VIP өрөөнүүд</button>
          </div>
        </div>
      )}

      {/* ROOMS PAGE */}
      {activePage === 'rooms' && (
        <section className="py-32 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3">Exclusive Spaces</p>
            <h2 className="font-serif text-4xl font-bold uppercase">VIP <span className="italic text-[#C9A84C]">Өрөөнүүд</span></h2>
            <div className="w-10 h-[1px] bg-[#C9A84C] mx-auto mt-5"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            <RoomCard num="01" name="VIP Suite — Karaoke" price="100,000₮" badge="Karaoke" desc="Тусгай karaoke систем, billiard ширээ, хувийн үйлчилгээ бүхий тансаг VIP өрөө." tags={['Karaoke system', 'Billiard', 'Private bar']} />
            <RoomCard num="02" name="VIP Suite — Pro Billiard" price="50,000₮" desc="Мэргэжлийн billiard ширээ, darts болон тав тухтай lounge суудал бүхий өрөө." tags={['Pro Billiard', 'Darts', 'Lounge']} />
            <RoomCard num="03" name="VIP Suite — Lounge" price="50,000₮" desc="Тансаг lounge орчин, мэргэжлийн billiard болон том дэлгэцтэй тохилог орчин." tags={['Pro Billiard', 'Lounge seating', 'TV screen']} />
          </div>
        </section>
      )}

      {/* MENU PAGE */}
      {activePage === 'menu' && (
        <section className="py-32 px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold">Lounge <span className="italic text-[#C9A84C]">Меню</span></h2>
          </div>
          <div className="flex justify-center mb-12 border border-[#C9A84C]/20">
            {['food', 'drinks', 'snacks'].map((tab) => (
              <button
                key={tab}
                onClick={() => setMenuTab(tab)}
                className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${menuTab === tab ? 'bg-[#C9A84C]/10 text-[#C9A84C]' : 'text-gray-500 hover:text-[#C9A84C]'}`}
              >
                {tab === 'food' ? 'Хоол' : tab === 'drinks' ? 'Ундаа' : 'Зууш'}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {menuData[menuTab].map((item, idx) => (
              <div key={idx} className="bg-[#111111] p-8 border border-[#C9A84C]/06 text-center hover:bg-[#1a1a1a] transition-all">
                <div className="text-2xl mb-4">{item.icon}</div>
                <div className="font-serif font-bold text-sm mb-1">{item.name}</div>
                <div className="text-[#C9A84C] text-[13px] font-bold mb-1">{item.price}</div>
                <div className="text-[10px] text-gray-500">{item.note}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BOOKING PAGE */}
      {activePage === 'booking' && (
        <section className="py-32 px-6 max-w-2xl mx-auto">
          <div className="bg-[#111111] p-12 border border-[#C9A84C]/15 shadow-2xl">
            <h2 className="font-serif text-3xl font-bold text-center mb-12 text-[#C9A84C]">Өрөө Захиалах</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Input label="Нэр" placeholder="Таны нэр" />
                <Input label="Утас" placeholder="9900-0000" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">VIP Өрөө</label>
                  <select className="bg-[#080808] border border-[#C9A84C]/15 p-3 text-sm outline-none focus:border-[#C9A84C]">
                    <option>VIP 01 — Karaoke (100,000₮/цаг)</option>
                    <option>VIP 02 — Pro Billiard (50,000₮/цаг)</option>
                    <option>VIP 03 — Lounge (50,000₮/цаг)</option>
                  </select>
                </div>
                <Input label="Огноо" type="date" />
              </div>
              <button onClick={submitBooking} className="w-full bg-[#C9A84C] text-[#080808] py-4 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#e8cc80] transition-all mt-4">Захиалга илгээх</button>
            </div>
            {submitted && (
              <div className="mt-8 p-6 border border-[#C9A84C]/30 bg-[#C9A84C]/5 text-center">
                <div className="text-[#C9A84C] mb-2">✦</div>
                <p className="text-[11px] uppercase tracking-widest text-gray-300">Таны захиалгыг хүлээн авлаа. Бид удахгүй холбогдоно.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/5 bg-[#111111] p-12 text-center">
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto text-xs">
          <div><p className="text-[#C9A84C] uppercase tracking-widest mb-2">📍 Хаяг</p><p className="text-gray-500">Улаанбаатар хот</p></div>
          <div><p className="text-[#C9A84C] uppercase tracking-widest mb-2">📞 Утас</p><p className="text-gray-500">+976 9900-0000</p></div>
          <div><p className="text-[#C9A84C] uppercase tracking-widest mb-2">🕓 Цаг</p><p className="text-gray-500">14:00 — 02:00</p></div>
        </div>
        <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">© 2026 San Carlo VIP Lounge</p>
      </footer>
    </div>
  );
}

// Туслах компонентууд
const RoomCard = ({num, name, price, desc, tags, badge}) => (
  <div className="bg-[#111111] p-10 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all relative group">
    {badge && <span className="absolute top-6 right-6 bg-[#C9A84C] text-[#080808] text-[8px] font-bold px-3 py-1 uppercase">{badge}</span>}
    <div className="font-serif text-5xl text-[#C9A84C]/10 font-bold mb-4">{num}</div>
    <h3 className="font-serif text-xl font-bold text-[#C9A84C] mb-4">{name}</h3>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(t => <span key={t} className="text-[8px] uppercase tracking-widest border border-gray-800 px-2 py-1 text-gray-500">{t}</span>)}
    </div>
    <p className="text-xs text-gray-400 mb-8 leading-relaxed">{desc}</p>
    <div className="font-serif text-2xl">{price} <span className="text-[10px] font-sans text-gray-500 uppercase">/ цаг</span></div>
  </div>
);

const Input = ({label, ...props}) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase tracking-widest text-gray-500">{label}</label>
    <input {...props} className="bg-[#080808] border border-[#C9A84C]/15 p-3 text-sm outline-none focus:border-[#C9A84C] transition-all" />
  </div>
);

export default App;