
import SchoolBlackListCard from '@/Components/cards/SchoolBlackListCard';
import SchoolCard from '@/Components/cards/SchoolCard';
import TeacherCard from '@/Components/cards/TeacherCard';
import LinkButton from '@/Components/LinkButton';


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function ShowPage() {
    const studentTeacher = usePage().props.studentTeacher;
    const schools = studentTeacher?.blacklist;
    const flash = usePage().props.flash;

    useEffect(()=>{
        if(flash.message.success) {
            toast.success(flash.message.success);
        }

        if(flash.message.error) {
            toast.success(flash.message.error);
        }

    },[flash])





    const schoolItems = schools?.map((item) => (
        <SchoolBlackListCard
            reasons={item?.black_listed_reasons}
            name={item?.student_teacher?.firstname + ' ' + item?.student_teacher?.lastname}
            school={item?.school?.name}
            file_number={item?.attached_documents_count}
            reason_number={item.black_listed_reasons_count}
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
