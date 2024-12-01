
import TeacherCard from '@/Components/cards/TeacherCard';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import LinkButton from '@/Components/LinkButton';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function StudentTeacherPage() {
    const student_teacher_list = usePage().props.student_teacher_data;
    const flash = usePage().props.flash;

    const { data, setData, reset, post, errors, processing, recentlySuccessful } =
        useForm({
            name: '',
        });

    const submit = (e) => {
        e.preventDefault();
        post(route('studentTeacher.search'),);
        // reset();
    };

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }

        if (flash.message.error) {
            toast.success(flash.message.error);
        }

    }, [flash])

    // console.log(student_teacher_list);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            router.delete(`/studentTeachers/destroy/${id}`)
        }
    };
    // studentTeachersc
    const student_teacherItems = student_teacher_list?.data?.map((item) => (
        <TeacherCard
            show_route={route('studentTeachers.show', item?.id)}
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
            <ToastContainer />
            <div className="mt-4  px-12 grid grid-cols-2 items-center  ">
                <form onSubmit={submit} >
                    <div className="px-12 flex items-center  justify-start">
                        <div className='px-5'>


                            <TextInput
                                id="name"
                                placeholder="Type a teacher name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                isFocused
                                autoComplete="name"
                            />

                            <InputError className="mt-2" message={errors.name} />
                        </div>
                        <PrimaryButton disabled={processing} >Search</PrimaryButton>
                        <div>
                            <LinkButton href={route('studentTeachers')} className="ms-4">
                                Reset search
                            </LinkButton>
                        </div>

                    </div>
                </form>

                <div className="px-12 flex  items-center justify-end">
                    <LinkButton href={route('studentTeachers.create')} className="ms-4">
                        Add New
                    </LinkButton>
                    <LinkButton href={route('studentTeachers.import')} className="ms-4">
                        Import list
                    </LinkButton>
                </div>

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
