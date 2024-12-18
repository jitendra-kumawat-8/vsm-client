export type RegisterPayload = {
  Email: string;
  Password: string;
  UserName: string;
  FirstName: string;
  LastName: string;
  Country: string;
  MobileNo: string;
  LookingFor: string;
};

export type LoginPayload = { Email: string; Password: string };

export type PayloadType = {
  userId: string;
  dob: string;
  lookingFor: string;
  countryCode: string;
  tob: string;
  pob: string;
  gender: string;
  homeTown: string;
  weight: string;
  height: string;
  maritalStatus: string;
  religion: string;
  cast: string;
  community: string;
  subCaste: string;
  gotra: string;
  motherTounge: string;
  aadharNo: string;
  panNo: string;
  passportNo: string;
  grewUpIn: string;
  additionalInfo: string;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  panPath: string;
  aadharPath: string;
  passportPath: string;
  profileCreatedBy: string;
  timeLineOfMarriage: string;
  timeOfBirth: string;
  cityOfBirth: string;
  homeTownState: string;
  particularReligionOfPartner: string;
  particularCasteOfPartner: string;
  particularCommunityOfPartner: string;
  particularGotraOfPartner: string;
  isWearDasterOrPagg: boolean;
  typeOfDasterOrPagg: string;
  fatherName: string;
  motherName: string;
  familyMobileNo: string;
  noOfFamilyMember: number;
  familyType: string;
  fatherStatus: string;
  motherStatus: string;
  familyLocation: string;
  isLocationSameAsMe: boolean;
  currentAddress: string;
  familyIncome: string;
  noOfBrothers: string;
  noOfSisters: string;
  familyUnitPreference: string;
  highestQualification: string;
  nameOfLastInstitution: string;
  nameOfLastSchool: string;
  highestEducation: string;
  workingType: string;
  nameOfOrganisation: string;
  designation: string;
  annualIncome: string;
  workingProfession: string;
  isHealthUpdate: boolean;
  diet: string;
  fitnessLevel: string;
  fitnessActivity: string;
  bloodGroup: string;
  preExistenceMedicalCondition: string;
  preExistenceMentalHealthCondition: string;
  alergies: string;
  visionCorrection: string;
  hearingCorrection: string;
  physicalDisabilities: string;
  isPhysicalDisability: boolean;
  timeDedicatedForFitnessActivity: string;
  physicalDisabilityName: string;
  isPreExistingMedicalCondition: boolean;
  preExistingMedicalConditionName: string;
  isKnownAllergies: string;
  knownAllergiesName: string;
  visionCorrectionName: string;
  isFamilyHistory: string;
  familyHistory: string;
  familyHistoryName: string;
  isFamilyAlcoholism: string;
  familyAlcoholismName: string;
  isSocialUpdate: boolean;
  memberOfOrganisation: string;
  professionalAssociation: string;
  communityOrganisation: string;
  otherOrganisation: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youTube: string;
  threads: string;
  nameOfPoliticalParty: string;
  isMemberOfPoliticalParty: boolean;
  isMemberOfZymOrClub: string;
  zymOrClubDetail: string;
  isProfessionAssociation: string;
  isMemberOfOrganiaation: string;
  isMemberOfOtherOrganisation: string;
  snapchat: string;
  isHobbyUpdate: boolean;
  hobbies: string;
  describeYourHobby: string;
  spendTimeOnHobbyInWeek: string;
  specifyHobby: string;
  trainingForHobbies: string;
  topicNameForLearnMore: string;
  enjoyTravellingForLeisure: string;
  spendingTimeAlone: string;
  doYouLikePets: string;
  doYouOwnPets: string;
  lifePartnerKeepingPets: string;
  isLifePartnerUpdate: boolean;
  describeLifePartner: string;
  partnerHeight: string;
  partnerWeight: string;
  partnerWearingSpectacles: string;
  partnerDifferentlyAbled: string;
  partnerLooksToYou: string;
  partnerMaritalStatus: string;
  partnerEducation: string;
  partnerFamilyType: string;
  locationAfterMarriage: string;
  locationAfterMarriageType: string;
  employmentStatusType: string;
  employmentStatusName: string;
  partnerDietShould: string;
  partnerHobby: string;
  personalityTraitsInPartner: string;
  personalityTraitsInPartnerName: string;
  percentageOfIncomeSaveMonthly: string;
  savingHeldInYourName: string;
  howSavingHeld: string;
  shareTheExpenses: string;
  genderBasedFinancialExpect: string;
  mergeYourAccounts: string;
  prioritizeSpending: string;
  wantToStartFamily: string;
  startFamilyReason: string;
  medicalTreatmentPersonally: string;
  wouldAdoptChild: string;
  isGenderBasedChildren: string;
  genderBasedChildrenRemark: string;
  isBothWorkAndTakeCareKids: string;
  wantToStayHome: string;
};

export interface UserResponse {
  email: string;
  status: boolean;
  isActive: boolean;
  iAmNotRobot: boolean;
  userId: string;
  countryCode: string;
  userRole: string;
  name: string | null;
  userName: string;
  firstName: string;
  lastName: string;
  returnUrl: string | null;
  msg: string;
  createDate: string;
  mobileNo: string;
  confirmPassword: string | null;
  lookingFor: string;
  country: string;
  isVerified: boolean;
  aboutMeInfo: AboutMeInfo;
  familyInfo: FamilyInfo;
  educationInfo: EducationInfo;
  professionInfo: ProfessionInfo;
  lifestyleAndHealthInfo: LifestyleAndHealthInfo;
  socialAffiliationInfo: SocialAffiliationInfo;
  hobbyInfo: HobbyInfo;
  lifePartnerInfo: LifePartnerInfo;
  userViewOnFamilyInfo: UserViewOnFamilyInfo;
}

export interface AboutMeInfo {
  userId: string | null;
  dob: string;
  tob: string;
  pob: string;
  gender: string;
  currentAddress: string;
  homeTown: string;
  weight: string;
  height: string;
  maritalStatus: string;
  religion: string;
  cast: string;
  community: string;
  subCaste: string;
  gotra: string;
  motherTounge: string;
  aadharNo: string;
  panNo: string;
  passportNo: string;
  grewUpIn: string;
  additionalInfo: string;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  panPath: string;
  aadharPath: string;
  passportPath: string;
  profileCreatedBy: string;
  timeLineOfMarriage: string;
  timeOfBirth: string;
  cityOfBirth: string;
  homeTownState: string;
  particularReligionOfPartner: string;
  particularReligionOfPartnerList: string[];
  particularCasteOfPartner: string;
  particularCasteOfPartnerList: string[];
  particularCommunityOfPartner: string;
  particularCommunityOfPartnerList: string[];
  particularGotraOfPartner: string;
  particularGotraOfPartnerList: string[];
  isWearDasterOrPagg: string;
  typeOfDasterOrPagg: string;
}

export interface FamilyInfo {
  isFamilyUpdate: boolean;
  userId: string | null;
  fatherName: string;
  motherName: string;
  familyMobileNo: string;
  noOfFamilyMember: number;
  familyType: string;
  fatherStatus: string;
  motherStatus: string;
  familyLocation: string;
  isLocationSameAsMe: boolean;
  currentAddress: string | null;
  familyIncome: string;
  noOfBrothers: string;
  noOfSisters: string;
  familyUnitPreference: string;
}

export interface EducationInfo {
  isEducationUpdate: boolean;
  userId: string | null;
  highestQualification: string;
  nameOfLastInstitution: string;
  nameOfLastSchool: string | null;
  highestEducation: string;
}

export interface ProfessionInfo {
  isProfessionUpdate: boolean;
  userId: string | null;
  workingType: string;
  nameOfOrganisation: string;
  designation: string;
  annualIncome: string;
  workingProfession: string;
}

export interface LifestyleAndHealthInfo {
  userId: string | null;
  isHealthUpdate: boolean;
  diet: string;
  fitnessLevel: string;
  timeDedicatedForFitnessActivity: string;
  fitnessActivity: string;
  fitnessActivityList: string[];
  bloodGroup: string;
  differentlyAbled: string;
  differentlyAbledConditionList: string[];
  differentlyAbledConditionListString: string;
  differentlyAbledConditionDetail: string;
  preExistenceMedicalCondition: string;
  preExistenceMedicalConditionList: string[];
  preExistenceMedicalConditionListString: string;
  preExistenceMedicalConditionDetail: string;
  allergies: string;
  allergiesList: string[];
  allergiesListString: string;
  allergiesDetail: string;
  visionCorrection: string;
  visionCorrectionList: string[];
  visionCorrectionListString: string;
  familyHistory: string;
  familyHistoryList: string[];
  familyHistoryListString: string;
  familyHistoryDetail: string;
  substanceAbuse: string;
  substanceAbuseDetails: string;
}

export interface SocialAffiliationInfo {
  userId: string | null;
  isSocialUpdate: boolean;
  memberOfGymkhanasOrClubs: string;
  memberOfGymkhanasOrClubsDetails: string;
  memberOfProfessionalOrganisation: string;
  memberOfProfessionalOrganisationDetails: string;
  memberOfCommunityBasedOrganisation: string;
  memberOfCommunityBasedOrganisationDetails: string;
  memberOfOtherOrganisation: string;
  memberOfOtherOrganisationDetails: string;
  politicallyActive: string;
  politicallyActiveDetails: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youTube: string;
  threads: string;
  snapchat: string;
}

export interface HobbyInfo {
  userId: string | null;
  isHobbyUpdate: boolean;
  hobbiesList: string[];
  trainingForHobbies: string;
  trainingForHobbiesDetail: string;
  specifyHobby: string;
  topicNameForLearnMore: string;
  spendTimeOnHobbyInWeek: string;
  enjoyTravellingForLeisure: string;
  spendingTimeAlone: string;
  doYouLikePets: string;
  doYouOwnPets: string;
  lifePartnerKeepingPets: string;
  hobbies: string;
}

export interface LifePartnerInfo {
  isLifePartnerUpdate: boolean;
  userId: string | null;
  describeLifePartner: string;
  partnerHeight: string;
  partnerWeight: string;
  partnerWearingSpectacles: string;
  partnerDifferentlyAbled: string;
  partnerLooksToYou: string;
  partnerMaritalStatus: string;
  partnerEducation: string;
  partnerFamilyType: string;
  locationAfterMarriage: string;
  locationAfterMarriageType: string;
  employmentStatusType: string;
  employmentStatusName: string;
  partnerDietShould: string;
  partnerHobby: string;
  personalityTraitsInPartner: string;
  personalityTraitsInPartnerName: string;
  personalityTraitsInPartnerNameList: string[];
  percentageOfIncomeSaveMonthly: string;
  savingHeldInYourName: string;
  howSavingHeld: string;
  shareTheExpenses: string;
  genderBasedFinancialExpect: string;
  mergeYourAccounts: string;
  prioritizeSpending: string;
}

export interface UserViewOnFamilyInfo {
  isViewOnFamilyUpdate: boolean;
  userId: string | null;
  wantToStartFamily: string;
  startFamilyReason: string;
  medicalTreatmentPersonally: string;
  wouldAdoptChild: string;
  isGenderBasedChildren: string;
  genderBasedChildrenRemark: string;
  isBothWorkAndTakeCareKids: string;
  wantToStayHome: string;
}
