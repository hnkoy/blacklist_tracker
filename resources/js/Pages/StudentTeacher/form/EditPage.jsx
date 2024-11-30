import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Transition } from '@headlessui/react';
import { Head, useForm, usePage } from '@inertiajs/react';


export default function EditStudentTeacherPage(props) {
    const universities = usePage().props.universities;
    const studentTeacher = usePage().props.studentTeacher;

    const { data, setData,reset, put, errors, processing, recentlySuccessful } =
    useForm({
        firstname: studentTeacher.firstname,
        lastname: studentTeacher.lastname,
        gender:studentTeacher.gender,
        province:studentTeacher.province,
        city:studentTeacher.city,
        street_address:studentTeacher.street_address,
        university_id:studentTeacher.university_id,
    });


    const submit = (e) => {
        e.preventDefault();
        put(route('studentTeachers.update', studentTeacher.id));
        if(recentlySuccessful){
            reset();
        }

    };

    const universityItems = universities?.map((item) => (
        <option value={item.id}>{item.name}</option>


    ));

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Student Teacher
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
                                    Update Student Teacher Informations
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Update   Student Teacher  Informations's profile.
                                </p>
                            </header>

                            <form onSubmit={submit}  className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="FirstName" />

                                    <TextInput
                                        id="firstname"
                                        className="mt-1 block w-full"
                                        value={data.firstname}
                                        onChange={(e) => setData('firstname', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="firstname"
                                    />

                                    <InputError className="mt-2" message={errors.firstname} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="LastName" value="LastName" />

                                    <TextInput
                                        id="lastname"
                                        className="mt-1 block w-full"
                                        value={data.lastname}
                                        onChange={(e) => setData('lastname', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="lastname"
                                    />

                                    <InputError className="mt-2" message={errors.lastname} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="gender" value="Gender" />

                                    <SelectInput
                                        id="gender"
                                        type="select"
                                        className="mt-1 block w-full"
                                        value={data.gender}
                                        onChange={(e) => setData('gender', e.target.value)}
                                        required
                                        autoComplete="gender"
                                    >
                                        <option disabled selected value="">select gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </SelectInput>

                                    <InputError className="mt-2" message={errors.gender} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="province" value="Province" />

                                    <TextInput
                                        id="province"
                                        className="mt-1 block w-full"
                                        value={data.province}
                                        onChange={(e) => setData('province', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="province"
                                    />

                                    <InputError className="mt-2" message={errors.province} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="city" value="City" />

                                    <TextInput
                                        id="city"
                                        className="mt-1 block w-full"
                                        value={data.city}
                                        onChange={(e) => setData('city', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="city"
                                    />

                                    <InputError className="mt-2" message={errors.city} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="street_address" value="Street address" />

                                    <TextInput
                                        id="street_address"
                                        className="mt-1 block w-full"
                                        value={data.street_address}
                                        onChange={(e) => setData('street_address', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="street_address"
                                    />

                                    <InputError className="mt-2" message={errors.street_address} />
                                </div>


                                <div>
                                    <InputLabel htmlFor="university" value="University" />

                                    <SelectInput
                                        id="university"
                                        type="select"
                                        className="mt-1 block w-full"
                                        value={data.university_id}
                                        onChange={(e) => setData('university_id', e.target.value)}
                                        required
                                        autoComplete="university"
                                    >
                                    <option disabled selected value="">select university</option>
                                       {universityItems}
                                    </SelectInput>

                                    <InputError className="mt-2" message={errors.university_id} />
                                </div>







                                <div className="flex items-center gap-4">
                                    <PrimaryButton >Save</PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">
                                            Updated.
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
