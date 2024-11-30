import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Transition } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';



export default function ImportPage(props) {
    const { data, setData,reset, post, errors, processing, recentlySuccessful } =
    useForm({
        file: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('studentTeachers.importPost'));
        reset();
    };

    const handleTransitionEnd = () => {

            router.visit('/studentTeachers');



    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                      Import Student Teacher
                </h2>
            }
        >
            <Head title="Import  Student Teacher" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">


                        <section>
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                  Import  Student Teacher Data
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Import  Student Teacher data from xsl or csv  file.
                                </p>
                            </header>

                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="file" value="Select file" />

                                    <TextInput
                                        id="name"
                                        type='file'
                                         name="file"
                                        className="mt-1 block w-full"
                                        onChange={e => setData('file', e.target.files[0])}
                                        required
                                        isFocused
                                        autoComplete="name"
                                    />

                                    <InputError className="mt-2" message={errors.file} />
                                </div>


                                {
                                    errors[0] &&
                                    <div className="border m-4 p-4">
                                        {errors[0] && <p className="text-danger">{errors[0]}</p>}
                                        {errors[1] && <p className="text-danger">{errors[1]}</p>}
                                        {errors[2] && <p className="text-danger">{errors[2]}</p>}
                                        {errors[3] && <p className="text-danger">{errors[3]}</p>}
                                        {errors[4] && <p className="text-danger">{errors[4]}</p>}
                                        {errors[5] && <p className="text-danger">{errors[5]}</p>}
                                        {errors[6] && <p className="text-danger">{errors[6]}</p>}


                                    </div>
                                }




                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing} >Import data</PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                        afterLeave={handleTransitionEnd}

                                    >
                                        <p className="text-sm text-gray-600">
                                        data imported successfully.
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
