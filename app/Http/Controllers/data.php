<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use stdClass;
use Illuminate\Support\Facades\Storage;

class data extends Controller
{
    public function data()
    {
        $pathOld = public_path('site-image\js\old.json');
        $p = public_path('site-image\js\p.json');
        $vp = json_decode(File::get($p));
        $pathName = public_path('site-image\js\name.json');
        $fileOld = json_decode(File::get($pathOld));
        $fileName = json_decode(File::get($pathName));
        if ($fileOld) {
            //$myClass = new MyClass();

            for ($i = 0; $i < 150; $i++) {

                $ward = 5 . "";
                $village = 'Tilkhari';
                $northSouth = mt_rand(395308, 405790);
                $eastWest = mt_rand(269287, 273666);

                if ($i < 20) {
                    $ward = $vp[0]->ward . "";
                    $village = $vp[0]->village;
                    $northSouth = mt_rand($vp[0]->lattitudeS, $vp[0]->lattitudeN);
                    $eastWest = mt_rand($vp[0]->LongituteW, $vp[0]->LongituteE);
                } elseif ($i > 20 && $i < 40) {
                    $ward = $vp[1]->ward . "";
                    $village = $vp[1]->village;
                    $northSouth = mt_rand($vp[1]->lattitudeS, $vp[1]->lattitudeN);
                    $eastWest = mt_rand($vp[1]->LongituteW, $vp[1]->LongituteE);
                } elseif ($i > 40 && $i < 60) {
                    $ward = $vp[2]->ward . "";
                    $village = $vp[2]->village;
                    $northSouth = mt_rand($vp[2]->lattitudeS, $vp[2]->lattitudeN);
                    $eastWest = mt_rand($vp[2]->LongituteW, $vp[2]->LongituteE);
                } elseif ($i > 60 && $i < 90) {
                    $ward = $vp[3]->ward . "";
                    $village = $vp[3]->village;
                    $northSouth = mt_rand($vp[3]->lattitudeS, $vp[3]->lattitudeN);
                    $eastWest = mt_rand($vp[3]->LongituteW, $vp[3]->LongituteE);
                } elseif ($i > 90 && $i < 120) {
                    $ward = $vp[4]->ward . "";
                    $village = $vp[4]->village;
                    $northSouth = mt_rand($vp[4]->lattitudeS, $vp[4]->lattitudeN);
                    $eastWest = mt_rand($vp[4]->LongituteW, $vp[4]->LongituteE);
                } elseif ($i > 120 && $i < 150) {
                    $ward = $vp[5]->ward . "";
                    $village = $vp[5]->village;
                    $northSouth = mt_rand($vp[5]->lattitudeS, $vp[5]->lattitudeN);
                    $eastWest = mt_rand($vp[5]->LongituteW, $vp[5]->LongituteE);
                 } //elseif ($i > 130 && $i < 150) {
                //     $ward = $vp[6]->ward . "";
                //     $village = $vp[6]->village;
                //     $northSouth = mt_rand($vp[6]->lattitudeS, $vp[6]->lattitudeN);
                //     $eastWest = mt_rand($vp[6]->LongituteW, $vp[6]->LongituteE);
                // }

                ////////////////////////////////
                //create some fuctionnality to manipulate the data //

                $timeStams = time();
                $nameRand = mt_rand(0, 290);
                $name = $fileName[$nameRand];
                $FatherName = $fileName[$nameRand + 3];
                $firstPhone = mt_rand(3, 9);
                $surPhone = mt_rand(00000000, 99999999);

                $id = '';
                if (mt_rand(0, 15) < 2) {
                    $id = mt_rand(0000000000, 9999999999);
                }

                $cowNative = mt_rand(0, 8);
                $cowCross = '';
                if (mt_rand(0, 15) < 2) {
                    $cowCross =  mt_rand(0, 4);
                }
                $goatMale = mt_rand(0, 4);
                $goatFemale = mt_rand(0, 4);
                $goatCalfFemale = mt_rand(0, 2);
                $goatCalfMale = mt_rand(0, 2);
                $shepFemale = mt_rand(0, 3);
                $shepMale = mt_rand(0, 3);
                $SheepCalfFemale = mt_rand(0, 3);
                $chikenNative = mt_rand(0, 12);
                $duckNative = mt_rand(0, 5);
                $familyMember = mt_rand(0, 6);
                $landTotal = mt_rand(20, 90);
                $landOwn = mt_rand(0, 10);

                //////////////////////////////////
                ///Start to create a new instance//

                $newObj = new stdClass();
                $newObj->id = $timeStams;
                $newObj->HouseHoldId = $timeStams;
                $newObj->YearId = "2024";
                $newObj->DivisionId = "6";
                $newObj->DistrictId = "49";
                $newObj->UpazilaId = "252";
                $newObj->UnionId = "2634";
                $newObj->Ward = $ward;
                $newObj->Village = $village;
                $newObj->FarmerName = $name;
                $newObj->FatherName = $FatherName;
                $newObj->MotherName = "";
                $newObj->HusbandWifeName = "";
                $newObj->NameOfTheFarm = "";
                $newObj->Phone = 0 . 1 . $firstPhone . $surPhone;
                $newObj->Gender = "1";
                $newObj->IsDisability = 0;
                $newObj->NID = $id . "";
                $newObj->IsPGMember  = 0;
                $newObj->Latitute  = 23 . "." . $northSouth . "";
                $newObj->Longitute  = 89 . "." . $eastWest;
                $newObj->CowNative  = $cowNative . "";
                $newObj->CowCross  = $cowCross . "";
                $newObj->MilkCow  = "";
                $newObj->CowBullNative  = "";
                $newObj->CowBullCross  = "";
                $newObj->CowCalfMaleNative  = "";
                $newObj->CowCalfMaleCross  = "";
                $newObj->CowCalfFemaleNative  = "";
                $newObj->CowCalfFemaleCross  = "";
                $newObj->CowMilkProductionNative  = "";
                $newObj->CowMilkProductionCross  = "";
                $newObj->BuffaloAdultMale  = "";
                $newObj->BuffaloAdultFemale  = "";
                $newObj->BuffaloCalfMale = "";
                $newObj->BuffaloCalfFemale = "";
                $newObj->BuffaloMilkProduction = "";
                $newObj->GoatAdultMale = $goatMale . "";
                $newObj->GoatAdultFemale = $goatFemale . "";
                $newObj->GoatCalfMale = $goatCalfFemale;
                $newObj->GoatCalfFemale = $goatCalfMale;
                $newObj->SheepAdultMale = $shepFemale;
                $newObj->SheepAdultFemale = $shepMale;
                $newObj->SheepCalfMale = $SheepCalfFemale + 1;
                $newObj->SheepCalfFemale = $SheepCalfFemale;
                $newObj->GoatSheepMilkProduction = "";
                $newObj->ChickenNative = $chikenNative . "";
                $newObj->ChickenLayer = "";
                $newObj->ChickenSonaliFayoumiCockerelOthers = "";
                $newObj->ChickenBroiler = "";
                $newObj->ChickenSonali = "";
                $newObj->ChickenEgg = "";
                $newObj->DucksNumber = $duckNative;
                $newObj->DucksEgg = "";
                $newObj->PigeonNumber = "";
                $newObj->QuailNumber = "";
                $newObj->OtherAnimalNumber = "";
                $newObj->FamilyMember = $familyMember . "";
                $newObj->LandTotal = $landTotal . "";
                $newObj->LandOwn = $landOwn . "";
                $newObj->LandLeased = "";
                $newObj->DataCollectionDate = "2024-03-19";
                $newObj->DataCollectorName = "Arup Roy";
                $newObj->DesignationId = "8";
                $newObj->PhoneNumber = "01739743610";
                $newObj->UserId = "10839";
                $newObj->Remarks = "YES";
                //return response(json_encode($newObj));
                $fileOld[$i] = $newObj;
            }
        }
        if ($fileOld) {
            $db = public_path('site-image/js/db.json'); // Corrected path separator
            $encodedData = json_encode($fileOld);

            // Write encoded data to the file
            if (File::put($db, $encodedData) !== false) {
                echo "Data written to db.json successfully.";
            } else {
                echo "Failed to write data to db.json.";
            }
        }
        return response(json_encode($fileOld));
    }
}
