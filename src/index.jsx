import { useState, React } from 'react'

function Index() {

    const aspek = Array.from({ length: 4 }, (_, index) => ({
        id: `aspek ${index + 1}`,
        name: `Aspek_Penelitian_${index + 1}`,
    }));

    const mahasiswa = Array.from({ length: 10 }, (_, index) => ({
        id: `mahasiswa ${index + 1}`,
        name: `Mahassiwa_${index + 1}`,
    }));

    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionChange = (e, id) => {
        const { value } = e.target;
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [id]: value
        }));
    };

    const [jsonData, setJsonData] = useState(null);

    const handleSave = () => {
        const jsonArr = [];
        aspek.forEach((as) => {
            const rowData = {
                name: as.name,
                options: {},
            };
            mahasiswa.forEach((maha) => {
                const key = `${maha.id}-${as.id}`;
                rowData.options[maha.name] = selectedOptions[key] || '';
            });
            jsonArr.push(rowData);
        });
        setJsonData(jsonArr);
    };

    const handleReset = () => {
        setJsonData({});
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
                                <th scope="col" className="px-6 py-3" key={as.id}>
                                    {as.name}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswa.map((maha) =>
                            <tr className="bg-white dark:bg-white dark:border-gray-600 dark:text-gray-600 border-2" key={maha.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap ">
                                    {maha.name}
                                </th>
                                {aspek.map((as) => (
                                    <td className="px-6 py-4" key={`${maha.id}-${as.id}`}>
                                        <div className="border-2 border-black">
                                            <select className='bg-white'
                                                // value={selectedOptions[maha.id]}
                                                value={selectedOptions[`${maha.id}-${as.id}`] || ''}
                                                onChange={(event) => handleOptionChange(event, `${maha.id}-${as.id}`)}
                                            >
                                                {Array.from({ length: 11 }).map((_, index) => (
                                                    <option key={index}>{index}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="pt-6 container mx-auto flex justify-end space-x-2">
                <button onClick={handleSave} className="bg-gray-600 text-black hover:bg-blue-900 border-2 border-black hover:border-blue-900">
                    Simpan
                </button>
                <button onClick={handleReset} className="bg-gray-600 text-black hover:bg-blue-900 border-2 border-black hover:border-blue-900">
                    Reset
                </button>
            </div>
            <div className='pt-3'>
                <div className="container mx-auto bg-black w-full p-5 text-white whitespace-pre">
                    {jsonData && (
                        <pre>{JSON.stringify(jsonData, null, 4)}</pre>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Index;
