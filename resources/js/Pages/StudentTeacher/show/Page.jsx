
import SchoolCard from '@/Components/cards/SchoolCard';
import TeacherCard from '@/Components/cards/TeacherCard';
import LinkButton from '@/Components/LinkButton';


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function ShowPage() {
    const studentTeacher = usePage().props.studentTeacher;
    const schools = studentTeacher?.school_black_listed;
    const flash = usePage().props.flash;

    useEffect(()=>{
        if(flash.message.success) {
            toast.success(flash.message.success);
        }

        if(flash.message.error) {
            toast.success(flash.message.error);
        }

    },[flash])

    console.log(schools);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            router.delete(`/studentTeachers/destroy/${id}`)
        }
    };

    const schoolItems = schools?.map((item) => (
        <SchoolCard
           show_route={route('school.show',  item.id)}
            key={item.id}
            route={route('school.edit', item.id)}
            onDelete={() => handleDelete(item.id)}
            name={item.name}
            blackList_number={item.black_listed_teachers_count}
        />
    ));



    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
           {studentTeacher?.school_black_listed_count} {studentTeacher?.school_black_listed_count>1?'schools':'school'} that have blacklisted the student teacher  <span className=' text-red-400'>{studentTeacher?.firstname +' '+studentTeacher?.lastname}  </span>
                </h2>
            }
        >
            <Head title="Student Teacher" />
            <ToastContainer />

            <div className="py-12">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='grid grid-cols-3 gap-4'>
                        {schoolItems}



                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
