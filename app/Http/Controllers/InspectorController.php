<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student_Data;

class InspectorController extends Controller
{
    public function dashboard()
    {
        $records = Student_Data::all()->map(function($item) {
            return [
                'id' => $item->id,
                'name' => $item->name,
                'cls' => $item->class,
                'section' => $item->section,
                'roll' => $item->roll_number,
                'dob' => $item->date_of_birth,
                'admNo' => $item->admission_number,
                'father' => $item->father_name,
                'mother' => $item->mother_name,
                'contact' => $item->contact_number,
                'contact2' => $item->alternate_contact_number,
                'address' => $item->address,
                'leaveDate' => $item->leaving_date,
                'tcDate' => $item->tc_date_issued,
                'status' => $item->tc_status,
                'reason' => $item->leaving_reason,
                'transferTo' => $item->transfer_to_school,
                'docType' => $item->document ? (in_array(strtolower(pathinfo($item->document, PATHINFO_EXTENSION)), ['jpg', 'jpeg', 'png']) ? 'image' : 'file') : null,
                'docData' => $item->document ? '/storage/'.$item->document : null,
                'docName' => $item->document ? basename($item->document) : '',
                'createdAt' => $item->created_at->format('Y-m-d')
            ];
        });

        return view('inspector.dashboard', compact('records'));
    }
}
