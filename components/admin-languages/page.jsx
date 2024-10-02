import { useState } from "react";
import Image from "next/image";

export default function Languages() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    flag: "/adminImgs/englandflag.svg",
    name: "English",
  });

  const languages = [
    { flag: "/adminImgs/englandflag.svg", name: "English" },
    { flag: "/adminImgs/azrbjflag.svg", name: "Azerbaijan" },
  ];

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-32">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between  p-2  rounded-lg cursor-pointer "
      >
        <div className="flex items-center">
          <Image
            src={selectedLang.flag}
            alt={selectedLang.name}
            width={24}
            height={24}
          />
          <span className="ml-2">{selectedLang.name}</span>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 z-10 w-full mt-2 bg-[#27283C]  rounded-lg shadow-lg">
          {languages.map((lang) => (
            <div
              key={lang.name}
              onClick={() => handleSelect(lang)}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-900 hover:rounded-lg"
            >
              <Image src={lang.flag} alt={lang.name} width={24} height={24} />
              <span className="ml-2">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
