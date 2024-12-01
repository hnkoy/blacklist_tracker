
import TeacherCard from '@/Components/cards/TeacherCard';
import LinkButton from '@/Components/LinkButton';


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function ShowPage() {
    const school = usePage().props.school;
    const teachers = school?.black_listed_teachers;
    const flash = usePage().props.flash;
console.log(school)
    useEffect(()=>{
        if(flash.message.success) {
            toast.success(flash.message.success);
        }

        if(flash.message.error) {
            toast.success(flash.message.error);
        }

    },[flash])

    // console.log(student_teacher_list);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            router.delete(`/studentTeachers/destroy/${id}`)
        }
    };

    const student_teacherItems = teachers?.map((item) => (
        <TeacherCard
           show_route={route('studentTeachers.show',item.id)}
            route={route('studentTeachers.edit', item.id)}
            onDelete={() => handleDelete(item.id)}
            school_blacklisted={item.school_black_listed_count}
            name={item?.firstname + ' ' + item?.lastname}
            university={item?.university?.name}
        />
    ));



    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                {school?.black_listed_teachers_count} Student  {school?.black_listed_teachers_count>1?'Teachers':'Teacher'}  that have been blacklisted by <span className=' text-red-400'>{school?.name}</span>
                </h2>
            }
        >
            <Head title="Student Teacher" />
            <ToastContainer />

            <div className="py-12">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='grid grid-cols-3 gap-4'>
                        {student_teacherItems}



                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
