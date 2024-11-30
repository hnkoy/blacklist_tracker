
import TeacherCard from '@/Components/cards/TeacherCard';
import LinkButton from '@/Components/LinkButton';


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';

export default function StudentTeacherPage() {
    const student_teacher_list = usePage().props.student_teacher_data;

    // console.log(student_teacher_list);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            router.delete(`/studentTeachers/destroy/${id}`, {
                onSuccess: () => alert('Item deleted successfully')
            })
        }
    };

    const student_teacherItems = student_teacher_list?.data?.map((item) => (
        <TeacherCard
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
                    Student Teachers List
                </h2>
            }
        >
            <Head title="Student Teacher" />
            <div className="mt-4  px-12 flex items-center justify-end">

                <LinkButton href={route('studentTeachers.create')} className="ms-4">
                    Add New
                </LinkButton>
                <LinkButton  href={route('studentTeachers.import')}  className="ms-4">
                    Import list
                </LinkButton>
            </div>
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
