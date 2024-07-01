<?php

function classifyAgeOfPerson($age) {

    if ($age >= 0 && $age <= 1) {
        return 'Infant';

    } else if ($age >= 2 && $age <= 12) {
        return 'Child';

    } else if ($age >= 13 && $age <= 19) {
        return 'Teen';

    } else if ($age >= 20 && $age <= 64) {    
        return 'adult';

    } else if ($age >= 65) {
        return 'Senior';
        
    } else {
        return 'Invalid Age';
    }
}

$age = 25;
$category =  classifyAgeOfPerson($age);
echo "This age is classified as: " . $category;
 
?>
