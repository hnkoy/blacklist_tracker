import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Transition } from '@headlessui/react';
import { Head, useForm, usePage } from '@inertiajs/react';


export default function EditPage(props) {
    const school = usePage().props.school;
    console.log(school)
    const { data, setData,reset, put, errors, processing, recentlySuccessful } =
    useForm({
        name: school.name,
        location: school.location,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('school.update',school.id));
        if(recentlySuccessful){
        alert('School updated successfully');
        reset();

        }

    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    School
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">


                        <section>
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Update Informations
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Update  School  Informations's profile.
                                </p>
                            </header>

                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="name"
                                    />

                                    <InputError className="mt-2" message={errors.name} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="name" value="Location" />

                                    <TextInput
                                        id="location"
                                        className="mt-1 block w-full"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="location"
                                    />

                                    <InputError className="mt-2" message={errors.location} />
                                </div>


                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing} >Save</PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">
                                        School created successfully.
                                        </p>
                                    </Transition>
                                </div>
                            </form>
                        </section>

                    </div>


                </div>
            </div>
        </AuthenticatedLayout>
    );
}
