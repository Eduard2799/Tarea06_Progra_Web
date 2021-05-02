<?php

  class HomeController extends Controller {
    
    public function index() {
      return view('index',['login'=>Auth::check()]); 
      //echo 'Hello, World!';
    }

  
  }

?>