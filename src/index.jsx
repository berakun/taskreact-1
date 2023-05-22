import React from 'react'
import { useState } from 'react'

function Index() {

    const aspek = [
        { text: 'aspek penilaian 1' },
        { text: 'aspek penilaian 2' },
        { text: 'aspek penilaian 3' },
        { text: 'aspek penilaian 4' }
    ]

    const mahasiswa = [
        { text: 'mahasiswa 1', text2: '', text3: '', text4: '', text5: '' },
        { text: 'mahasiswa 2', text2: '', text3: '', text4: '', text5: '' },
        { text: 'mahasiswa 3', text2: '', text3: '', text4: '', text5: '' },
        { text: 'mahasiswa 4', text2: '', text3: '', text4: '', text5: '' },
        { text: 'mahasiswa 5', text2: '', text3: '', text4: '', text5: '' },
        { text: 'mahasiswa 6', text2: '', text3: '', text4: '', text5: '' },
        { text: 'mahasiswa 7', text2: '', text3: '', text4: '', text5: '' },
        { text: 'mahasiswa 8', text2: '', text3: '', text4: '', text5: '' },
        { text: 'mahasiswa 9', text2: '', text3: '', text4: '', text5: '' },
        { text: 'mahasiswa 10', text2: '', text3: '', text4: '', text5: '' }
    ]

    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionChange = (event, text) => {
        const { value } = event.target;
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [text]: value
        }));
    };

    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-screen h-screen bg-white justify-center items-center">
            <div className="flex flex-col">
                <table className="w-full container mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-600">
                        <tr>
                            <th scope="col" className="px-6 py-3">

                            </th>
                            {aspek.map((as) =>
                                // mahasiswa.map((ask) => (
                                <th scope="col" className="px-6 py-3">
                                    {as.text}
                                </th>
                                // ))
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswa.map((maha) =>
                            <tr className="bg-white dark:bg-white dark:border-gray-600 dark:text-gray-600 border-2">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap ">
                                    {maha.text}
                                </th>
                                <td className="px-6 py-4">
                                    <div className="border-2 border-black">
                                        <select className='bg-white' value={selectedOptions[maha.text] || ''}
                                            onChange={(event) => handleOptionChange(event, maha.text)}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="border-2 border-black">
                                        <select className='bg-white' value={selectedOptions[maha.text] || ''}
                                            onChange={(event) => handleOptionChange(event, maha.text)}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="border-2 border-black">
                                        <select className='bg-white' value={selectedOptions[maha.text] || ''}
                                            onChange={(event) => handleOptionChange(event, maha.text)}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="border-2 border-black">
                                        <select className='bg-white' value={selectedOptions[maha.text] || ''}
                                            onChange={(event) => handleOptionChange(event, maha.text)}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="pt-6 container mx-auto flex justify-end">
                <button className="bg-gray-600 text-black hover:bg-blue-900 border-2 border-black hover:border-blue-900">
                    Simpan
                </button>
            </div>
        </div>
    )
}

export default Index;
