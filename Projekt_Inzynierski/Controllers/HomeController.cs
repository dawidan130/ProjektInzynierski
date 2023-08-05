using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Projekt_Inzynierski.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult StronaGłówna()
        {
            return View();
        }
    }
}