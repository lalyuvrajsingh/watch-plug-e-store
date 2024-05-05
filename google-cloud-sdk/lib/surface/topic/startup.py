# -*- coding: utf-8 -*- #
# Copyright 2015 Google LLC. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Supplementary help for gcloud startup options."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.calliope import base


class Startup(base.TopicCommand):
  """Supplementary help for gcloud startup options.


  # Choosing a Python Interpreter

  The `gcloud` CLI runs under Python. Windows, Mac and Linux RPM based installs
  include a bundled Python interpreter. To install on Linux using a different
  package format, you must have a Python interpreter on your system,
  `gcloud` will  attempt to locate an interpreter on your system PATH by looking
  for the following binaries:

      * python2
      * python27
      * python
      * python3

  If you have a bundled python installed it will be preferred, to override
  this you will need to set CLOUDSDK_PYTHON env var, see below.

  Python 3 is preferred over Python 2. Note that `gcloud` requires Python
  version 2.7.x or 3.5-3.8.

  Other Python tools shipped in the Google Cloud CLI do not support Python 3 and
  require Python 2.7.x, including:

      * `dev_appserver`
      * `endpointscfg`

  Bundled Python on Linux

  Starting with release 365.0.0, RPM installs of google-cloud-sdk will include
  a bundled Python 3.8 installation. This installation will be used by
  default. If you want to use a different Python installation, set the
  CLOUDSDK_PYTHON environment variable to the absolute path to your python
  interpreter.

  If you have multiple Python interpreters available (including a bundled
  python) or if you don't have one on your PATH, you can specify which
  interpreter to use by setting the `CLOUDSDK_PYTHON` environment variable. For
  example:

    # Use the python3 interpreter on your path
    $ export CLOUDSDK_PYTHON=python3


    # Use a python you have installed in a special location
    $ export CLOUDSDK_PYTHON=/usr/local/my-custom-python-install/python

  gsutil versions 5.0 and onward support Python 3.5-3.8. To use a different
  interpreter for gsutil than for the other Python tools, set the
  CLOUDSDK_GSUTIL_PYTHON environment variable to the desired interpreter.

  bq now supports Python 3.5-3.8 in addition to Python 2.7.x. To use a
  different interpreter for bq than for the other Python tools, you can set the
  desired interpreter by setting the CLOUDSDK_BQ_PYTHON environment variable.

  # Configuring the Python Interpreter

  While not typically necessary, you are able to pass interpreter level
  arguments to the Python running `gcloud` via the `CLOUDSDK_PYTHON_ARGS`
  environment variable.

  A common use case for this (which has been special-cased) is to enable
  'site packages'. This allows Python to pick up libraries from the system (
  for example, those that may have been installed with `pip`). Site packages may
  be necessary if you require certain native libraries (as is the case if you
  work with service accounts using a legacy .p12 key, for example). To enable
  site packages, set `CLOUDSDK_PYTHON_SITEPACKAGES=1`. Note that enabling site
  packages may cause conflicts with `gcloud` packaged libraries, depending on
  what you have installed on your system.


  # Setting Configurations and Properties

  Your active configuration can also be set via the environment variable
  `CLOUDSDK_ACTIVE_CONFIG_NAME`. This allows you to specify a certain
  configuration in a given terminal session without changing the global
  default configuration.

  In addition to being able to set them via `gcloud config set`,
  each `gcloud` property has a corresponding environment variable. They take
  the form: `CLOUDSDK_SECTION_PROPERTY`. For example, if you wanted to
  change your active project for just one terminal you could run:

    $ export CLOUDSDK_CORE_PROJECT=my-project

  For more information, see `gcloud topic configurations`.
  """
