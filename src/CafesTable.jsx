import React, { useState, useEffect } from 'react';
import FilterCafes from "./FilterCafes";

const CafesTable = () => {
    const [cafes, setCafes] = useState([]);
    const [filteredCafes, setFilteredCafes] = useState([]);
    const [selectedSubway, setSelectedSubway] = useState('All');
    
    useEffect(() => {
        const testCafes = [
            {
                id: 1,
                name: 'Тестовое кафе',
                desc: 'Тестовое описание',
                subwayCode: 'Arbat',
                address: 'Тестовый адрес',
                workTime: '8:00 - 20:00',
                img: 'https://via.placeholder.com/150'
            }
        ];
        setCafes(testCafes);
        setFilteredCafes(testCafes);

        fetch('/cafes')
            .then(response => response.json())
            .then(data => {
                const cafesData = data.cafes || [];
                setCafes(cafesData);
                setFilteredCafes(cafesData);
            })
            .catch(error => {
                console.error('Error fetching cafes:', error);
            });
    }, []);
    
    useEffect(() => {
        if (selectedSubway === 'All') {
            setFilteredCafes(cafes);
        } else {
            const filtered = cafes.filter(cafe => cafe.subwayCode === selectedSubway);
            setFilteredCafes(filtered);
        }
    }, [selectedSubway, cafes]);
    
    const handleFilterChange = (subway) => {
        setSelectedSubway(subway);
    };
    
    const subwayOptions = [
        { name: "Арбатская", code: "Arbat" },
        { name: "Александровский сад", code: "Alexanders Garden" },
        { name: "Московская", code: "Moscow" },
        { name: "Парк Культуры", code: "Culture" },
        { name: "Театральная", code: "Theater" },
    ];
    
    return (
        <div className="cafesTable">
            <FilterCafes 
                subwayOptions={subwayOptions} 
                onFilterChange={handleFilterChange}
            />
            <ul className="cardsList">
                {filteredCafes.map((cafe) => (
                    <li key={cafe.id} className="card">
                        <img 
                            src={cafe.img || "https://via.placeholder.com/150"} 
                            alt={cafe.name} 
                        />
                        <h2>{cafe.name}</h2>
                        <p>{cafe.desc}</p>
                        <p>{cafe.address}</p>
                        <p>Subway: {cafe.subwayCode}</p>
                        <p>{cafe.workTime}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CafesTable