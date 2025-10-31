import { courses } from "../data/courses";

function Card({ title, description }) {
  return (
    <div class="space-y-8 md:col-span-2">
      <div class="rounded-lg border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
        <h3 class="mb-4 text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          {title}
        </h3>
        <p class="text-base text-text-secondary-light dark:text-text-secondary-dark">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
