import SchoolCard from '@/Components/cards/SchoolCard';
import InputError from '@/Components/InputError';
import LinkButton from '@/Components/LinkButton';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function SchoolPage() {
    const school_list = usePage().props.school_data;
    const flash = usePage().props.flash;

    const { data, setData,reset, post, errors, processing, recentlySuccessful } =
    useForm({
        name: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('school.search'),);
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

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this school?")) {
            router.delete(`/schools/destroy/${id}`)
        }
    };




    const schoolItems = school_list?.data?.map((item) => (
        <SchoolCard
            show_route={route('school.show', item.id)}
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
                    School List
                </h2>
            }
        >
            <Head title="Dashboard" />
            <ToastContainer />

            <div className="mt-4  px-12 grid grid-cols-2 items-center  ">
                <form onSubmit={submit} >
                    <div className="px-12 flex items-center  justify-start">
                        <div className='px-5'>


                            <TextInput
                                id="name"
                                placeholder="Type a school name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                isFocused
                                autoComplete="name"
                            />

                            <InputError className="mt-2" message={errors.name} />
                        </div>
                        <PrimaryButton >Search</PrimaryButton>
                        <div>
                            <LinkButton href={route('schools')} className="ms-4">
                                Reset search
                            </LinkButton>
                        </div>

                    </div>

                </form>

                <div className="px-12 flex items-center justify-end">

                    <LinkButton href={route('school.create')} className="ms-4">
                        Add New
                    </LinkButton>

                </div>

            </div>


            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='grid grid-cols-3 gap-4'>
                        {schoolItems}
                    </div>

                </div>
                <div className='flex justify-end'>
                <Pagination class="mt-6" links={school_list.links} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
