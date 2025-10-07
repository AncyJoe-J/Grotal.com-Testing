// import { test as baseTest, expect, Page } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import { CarWashPage } from '../pages/CarWashPage';
// import { GymPage } from '../pages/GymPage';
// import { CourierPage } from '../pages/CourierPage';
// import { ToursPage } from '../pages/ToursPage';
// import { AdvertisePage } from '../pages/AdvertisePage';
// import { EducationPage } from '../pages/EducationPage';
// import { JobsPage } from '../pages/JobsPage';
// import { ServicesPage } from '../pages/ServicesPage';
// import { ExplorePage } from '../pages/ExplorePage';




// export class PageFixture {
//   readonly login: LoginPage;
// //   readonly carwash: CarWashPage;
// //   readonly gym: GymPage;
// //   readonly courier: CourierPage;
// //   readonly tours: ToursPage;
// //   readonly advertise: AdvertisePage;
// //   readonly education: EducationPage;
// //   readonly explore: ExplorePage;
// //   readonly jobs: JobsPage;
// //   readonly services: ServicesPage;

//   constructor(page: Page) {

//     this.login = new LoginPage(page);
//     // this.carwash = new CarWashPage(page);
//     // this.gym = new GymPage(page);
//     // this.courier = new CourierPage(page);
//     // this.tours = new ToursPage(page);
//     // this.advertise = new AdvertisePage(page);
//     // this.education = new EducationPage(page);
//     // this.explore = new ExplorePage(page);
//     // this.jobs = new JobsPage(page);
//     // this.services = new ServicesPage(page);
//   }
// }

// type Fixtures = {
//   pages: PageFixture;
// };

// export const test = baseTest.extend<Fixtures>({
//   pages: async ({ page }, use) => {
//     await use(new PageFixture(page));
//   },
// });

// export { expect };
import { test as baseTest, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CarWashPage } from '../pages/CarWashPage';
import { GymPage } from '../pages/GymPage';
import { ToursPage } from '../pages/ToursPage';
import { CourierPage } from '../pages/CourierPage';
import { AdvertisePage } from '../pages/AdvertisePage';

export class PageFixture {
  readonly login: LoginPage;
  readonly carwash: CarWashPage;
  readonly gym: GymPage;
  readonly tours: ToursPage;
  readonly courier: CourierPage;
  readonly advertise: AdvertisePage;

  constructor(page: Page) {
    this.login = new LoginPage(page);
    this.carwash = new CarWashPage(page);
    this.gym = new GymPage(page);
    this.tours = new ToursPage(page);
    this.courier = new CourierPage(page);
    this.advertise = new AdvertisePage(page);

  }
}

type Fixtures = {
  pages: PageFixture;
};

export const test = baseTest.extend<Fixtures>({
  pages: async ({ page }, use) => {
    await use(new PageFixture(page));
  },
});

export { expect };
