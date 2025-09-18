import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { doctors, specialityData } from '../assets/assets_frontend/assets';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDocs, setFilterDocs] = useState([])
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDocs(doctors.filter(docs => docs.speciality == speciality))
    }
    else { setFilterDocs(doctors) }
  }
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality])



  return (
    <div>
      <p className='text-gray-600'>Browse through doctors specialists</p>
      <div className='flex flex-col sm:flex-row mt-5 gap-5 items-start'>
        <div className='flex flex-col text-sm gap-4 text-gray-600'>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-8 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'text-black bg-indigo-100' : ''}`}>Gynecologist</p>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-8 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'text-black bg-indigo-100' : ''}`}>General physician</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-8 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'text-black bg-indigo-100' : ''}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-8 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? 'text-black bg-indigo-100' : ''}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-8 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'text-black bg-indigo-100' : ''}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-8 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'text-black bg-indigo-100' : ''}`}>Gastroenterologist</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full cursor-pointer'>
          {filterDocs.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="flex flex-col items-center gap-2 border rounded-lg hover:shadow-lg border-gray-200"
              key={index}
            >
              <img
                className="bg-blue-50 rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex flex-col items-start gap-1 text-sm p-2">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p className="text-sm">Available</p>
                </div>
                <p className="text-gray-900 text-[16px] font-medium">
                  {item.name}
                </p>
                <p className="text-gray-600 text-xs">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors