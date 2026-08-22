import { Page, Locator } from '@playwright/test';
export class updateProfile {
  readonly page!: Page;
  readonly profileDropdown!: Locator;
  readonly profile!: Locator;
  readonly editButton!: Locator;
  readonly fullName!: Locator;
  readonly phoneNumber!: Locator;
  readonly addressline1!: Locator;
  readonly City!: Locator;
  readonly pincode!: Locator;
  readonly GSTIN ! : Locator;
  readonly State ! : Locator
  readonly District ! : Locator
  readonly Mandal ! : Locator
  readonly University ! : Locator
  readonly College ! : Locator
  readonly saveChangesButton!: Locator;
  
  constructor(page: Page) {
    this.page = page;
     this.profileDropdown = page.getByRole('button', { name: /Trainee$/ });
      this.profile = page.getByRole('link', { name: 'Profile' });
      this. editButton = page.getByRole('button', { name: 'Edit Profile' })
      this.fullName = page.locator("#full_name")
      this. phoneNumber = page.locator("#phone")
      this.addressline1 = page.locator('#address_line_2')
      this.City =  page.locator('#city')
        this.pincode = page.locator('#pincode')
        this.GSTIN = page.locator('#gstin')
        //this.State = page.locator('#react-select-state-placeholder')
        this.State = page.locator('#react-select-state-input')
        this .District = page.locator("#react-select-district-input")
        this.Mandal = page.locator("#react-select-mandal-input")
        this.University = page.locator("#react-select-university-input")
        this.College = page.locator("#react-select-college-input")
      this.saveChangesButton= page.getByRole('button', { name: 'Save Changes' })
  }
    async updateProfile(fullName: string, phoneNumber: string, addressLine1: string, city: string, pincode: string, GSTIN: string) {
  await this.profileDropdown.click();
  await this.profile.click();
  await this.editButton.click();
  await this.fullName.fill(fullName);
  await this.phoneNumber.fill(phoneNumber);
  await this.addressline1.fill(addressLine1);
  await this.City.fill(city);
  await this.pincode.fill(pincode);
  await this.GSTIN.fill(GSTIN);
  //await this.State.selectOption({ label:'AP'});
  await this.State.click();
  await this.page.getByRole('option', { name: 'Andhra Pradesh', exact: true }).click();

  await this .District.click();
  await this.District.fill('BAPATLA');
  await this.page.getByRole('option', { name: 'BAPATLA', exact: true }).click();
  await this.Mandal.click();
  await this.Mandal.fill('Inkollu');
  await this.page.getByRole('option', { name: 'Inkollu', exact: true }).click();

  await this.University.click();
  await this.University.fill('Andhra University');
  await this.page.getByRole('option', { name: 'Andhra University', exact: true }).click();
  await this.College.click();
  await this.College.fill('Andhra University College of Engineering');
  await this.page.getByRole('option', { name: 'Andhra University College of Engineering', exact: true }).click();


  await this.saveChangesButton.click();
  await this.page.waitForTimeout(3000);

}
}