import React from 'react'

function Index() {

    const aspek = [
        { text: 'aspek penilaian 1' },
        { text: 'aspek penilaian 2' },
        { text: 'aspek penilaian 3' },
        { text: 'aspek penilaian 4' }
    ]

    const mahasiswa = [
        { text: 'mahasiswa 1', text2: '10', text3: '10', text4: '10', text5: '10' },
        { text: 'mahasiswa 2', text2: '10', text3: '10', text4: '10', text5: '10' },
        { text: 'mahasiswa 3', text2: '10', text3: '10', text4: '10', text5: '10' },
        { text: 'mahasiswa 4', text2: '10', text3: '10', text4: '10', text5: '10' },
        { text: 'mahasiswa 5', text2: '10', text3: '10', text4: '10', text5: '10' },
        { text: 'mahasiswa 6', text2: '10', text3: '10', text4: '10', text5: '10' },
        { text: 'mahasiswa 7', text2: '10', text3: '10', text4: '10', text5: '10' },
        { text: 'mahasiswa 8', text2: '10', text3: '10', text4: '10', text5: '10' },
        { text: 'mahasiswa 9', text2: '10', text3: '10', text4: '10', text5: '10' },
        { text: 'mahasiswa 10', text2: '10', text3: '10', text4: '10', text5: '10' }
    ]

    const input = {

    }

    return (

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-screen h-screen bg-white grid justify-center items-center">
            <table class="w-full container mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-600">
                    <tr>
                        <th scope="col" class="px-6 py-3">

                        </th>
                        {aspek.map((as) =>
                            // mahasiswa.map((ask) => (
                            <th scope="col" class="px-6 py-3">
                                {as.text}
                            </th>
                            // ))
                        )}
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map((maha) =>
                        <tr class="bg-white dark:bg-white dark:border-gray-600 dark:text-gray-600 border-2">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap ">
                                {maha.text}
                            </th>
                            <td class="px-6 py-4">
                                <div className="border-2 border-black">
                                    {maha.text2}
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div className="border-2 border-black">
                                    {maha.text3}
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div className="border-2 border-black">
                                    {maha.text4}
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div className="border-2 border-black">
                                    {maha.text5}
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="pt-6">
                <button>
                    Simpan
                </button>
            </div>
        </div>
    )
}

export default Index;
