import React from 'react'

function Index() {

    const mahasiswa = [
        { text: 'mahasiswa 1' },
        { text: 'mahasiswa 2' },
        { text: 'mahasiswa 3' },
        { text: 'mahasiswa 4' },
        { text: 'mahasiswa 5' },
        { text: 'mahasiswa 6' },
        { text: 'mahasiswa 7' },
        { text: 'mahasiswa 8' },
        { text: 'mahasiswa 9' },
        { text: 'mahasiswa 10' },
    ]

    const input = {

    }

    return (

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-screen h-screen bg-white flex justify-center items-center">
            <table class="w-full container mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-600">
                    <tr>
                        <th scope="col" class="px-6 py-3">

                        </th>
                        <th scope="col" class="px-6 py-3">
                            Aspek penilaian 1
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Aspek penilaian 2
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Aspek penilaian 3
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Aspek penilaian 4
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white dark:bg-white dark:border-gray-600 dark:text-gray-600 border-2">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap ">
                            Mahasiswa 1
                        </th>
                        <td class="px-6 py-4">
                            <div className="border-2 border-black">
                                Silver
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="border-2 border-black">
                                Silver
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="border-2 border-black">
                                Silver
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="border-2 border-black">
                                Silver
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-white dark:border-gray-600 dark:text-gray-600 border-2">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap ">
                            Mahasiswa 2
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-white dark:border-gray-600 dark:text-gray-600 border-2">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap ">
                            Mahasiswa 3
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Index;
