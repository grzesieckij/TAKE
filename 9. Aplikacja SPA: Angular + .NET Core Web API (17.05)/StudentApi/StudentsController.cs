using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace StudentApi
{
    public class StudentsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}