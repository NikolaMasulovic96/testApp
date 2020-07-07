import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import Dropdown from '../dropdown/index'


const Header: React.FC = () => {
  const menuItems = {
    rs: [
      "Lepota i Vi",
      "Kuhanje na zdrav način",
      "Kampiranje na otvorenom",
      "Aktivirajte se",
      "Meditacija",
      "2 + 2 = 3",
      "Za filmofile i knjigoljupce",
      "Jučer danas sutra"
    ],
    en: [
      "Beauty and You",
      "Healthy Cooking",
      "Outdoor Camping",
      "Activate",
      "Meditation",
      "2 + 2 = 3",
      "Cinephiles' and Booklovers' Corner",
      "Yesterday Today Tomorrow"
    ]
  }

  const [newItems, setNewItems] = useState<string[]>()
  const [outItems, setOutItems] = useState<string[]>([])
  const [showDropdouwn, setShowDropdown] = useState<boolean>(false)
  const [elements, setElements] = useState<string[]>(menuItems.en)
  const [currentLang, setCurrentLang] = useState<string>('en')

  const myRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    calculate()
    window.addEventListener("resize", calculate);
    return () => {
      window.removeEventListener("resize", calculate);
    }
  }, [])


  const calculate = () => {
    const allItems: string[] = []
    const outItems: string[] = []
    if (myRef.current) {
      const items = Array.from(myRef.current.children)
      items.forEach(element => {
        const rect = element.getBoundingClientRect()
        allItems.push(element.innerHTML.valueOf())
        if (myRef.current)
          if (rect.right > myRef.current?.clientWidth) {
            outItems.push(element.innerHTML.valueOf())
          }
      })
    }
    const newItems = allItems.filter(item => !outItems.includes(item));
    setNewItems(newItems)
    setOutItems(outItems)
  }

  useEffect(() => {
    if (outItems) {
      setShowDropdown(outItems.length > 0 ? true : false)
    }
  }, [outItems])
  useEffect(() => {
    if (currentLang === 'rs') {
      setElements(menuItems.rs)
    } else {
      setElements(menuItems.en)
    }
    // calculate()
  }, [currentLang])

  useEffect(() => {
    calculate()
  }, [elements])

  const setLang = (lang: string) => {
    setCurrentLang(lang)
  }
  return (
    <div className="App">
      <div className="Header">
        {newItems && newItems.map(item => (
          <p className="Item" key={item}>
            {item}
          </p>
        ))
        }
      </div>
      <div className="Header-dropdown">
        <Dropdown dropdownActive={showDropdouwn} items={outItems}></Dropdown>
      </div>
      <button onClick={() => setLang('rs')}>RS</button>
      <button onClick={() => setLang('en')}>EN</button>
      <div className="Header-ref" ref={myRef}>
        {elements.map((item, index) => (
          <p className="Item" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Header;
