import Card from "./Card";
import Header from "./Header";
import CardWithList from "./CardWithList";

function CourseInfo({ course }) {
  return (
    <>
      <body>
        <main className="course-info"></main>
        <div>
          <h2>Informações do Curso</h2>
          <p>Nome: {course.name}</p>
          <p>Descrição: {course.description}</p>
          <p>Duração: {course.duration} horas</p>
        </div>
        <div class="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 class="text-4xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
                  {course.name}
                </h1>
                <p class="mt-1 text-base text-text-secondary-light dark:text-text-secondary-dark">
                  Professor: {course.teacher}
                </p>
              </div>
              <div class="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                <button class="flex shrink-0 items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-sm transition-transform hover:scale-105">
                  <span>Matricular-se</span>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div class="space-y-8 md:col-span-2">
                <CardWithList
                  title={"Detalhes do Curso"}
                  listItems={course.whyimportant}
                />
                <Card title={"Ementa"} description={course.description} />
                <Card
                  title={"Pré-requisitos"}
                  description={course.requisites}
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default CourseInfo;
