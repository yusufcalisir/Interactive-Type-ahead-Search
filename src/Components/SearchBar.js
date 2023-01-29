import './SearchBar.scss'
import { GoSearch } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';





function SearchBar({ data }) {

    const [inputSearch, setInputSearch] = useState("")
    const [filterSearch, setFilterSearch] = useState([])
    
    const handleFilter = (event) => {
        setInputSearch(event.target.value);
        const newFilter = data.filter(value => {
            return value.title.toLowerCase().includes(inputSearch.toLowerCase())
        });
                setFilterSearch(newFilter.slice(0,3));
    }
      
    useEffect(() => {
        if (inputSearch === "") {
            setFilterSearch([])
        }
    }, [inputSearch])
    
        function handleClickAutoComplete(value) {
        setInputSearch(value.title)
        setFilterSearch([])
    }
    
    function clearText() {
        setInputSearch("")
        setFilterSearch([])
    }
    
    return (
        <div className='search'>

            <div className='searchInputs'>
                <IconContext.Provider value={{ color: "#B8B8B8", size: "30px"}}>
                    <GoSearch />
                    <input type="text" className="search-input" placeholder='SEARCH ( Client Name / Policy Number)' value={inputSearch} onChange={handleFilter} /> 
                    {inputSearch !== "" ? <AiOutlineClose onClick={clearText} /> : ""}

                </IconContext.Provider>
                <div className='search-line'></div>

            </div>

            {filterSearch.length !== 0 &&
                <div className='dataResult'>
                    {filterSearch.slice(0,3).map(value => (
                        <div key={value.id} className='dataItem' onClick={() => handleClickAutoComplete(value)}>
                        <div className="phone-container">
                         <i className="fas fa-phone-alt phone-icon"></i>
                         <p className="phone">{value.phone}</p>
                        </div>
                        <div className="name">{value.title}</div> 
                        <div className='email-container'><p className="email">@ {value.email}</p></div>
                             <div className='policyNumber-container'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                </svg>
                                   Policy No.{value.policyNumber}
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}


export default SearchBar
