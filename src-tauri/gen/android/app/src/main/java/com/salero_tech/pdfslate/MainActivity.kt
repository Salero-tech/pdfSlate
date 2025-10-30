package com.salero_tech.pdfslate

import android.os.Bundle
import android.view.View
import android.view.WindowManager
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import android.graphics.Color

class MainActivity : TauriActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    
    // Set black background for the window
    window.decorView.setBackgroundColor(Color.BLACK)
    
    // Set black background for status bar and navigation bar
    window.statusBarColor = Color.BLACK
    window.navigationBarColor = Color.BLACK
    
    // Enable fullscreen mode - hide both status bar and navigation bar
    val windowInsetsController = WindowCompat.getInsetsController(window, window.decorView)
    windowInsetsController?.apply {
      // Hide both status bar (top) and navigation bar (bottom)
      hide(WindowInsetsCompat.Type.statusBars())
      hide(WindowInsetsCompat.Type.navigationBars())
      
      // User can swipe to temporarily show bars
      systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE

    }
  }
}
