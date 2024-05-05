# -*- coding: utf-8 -*- #
# Copyright 2021 Google LLC. All Rights Reserved.
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
"""Rejects a Cloud Deploy rollout."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.api_lib.clouddeploy import rollout
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.deploy import delivery_pipeline_util
from googlecloudsdk.command_lib.deploy import resource_args
from googlecloudsdk.core.console import console_io

_DETAILED_HELP = {
    'DESCRIPTION':
        '{description}',
    'EXAMPLES':
        """ \
    To reject a rollout 'test-rollout' for delivery pipeline 'test-pipeline', release 'test-release' in region 'us-central1', run:

      $ {command} test-rollout --delivery-pipeline=test-pipeline --release=test-release --region=us-central1

""",
}


@base.ReleaseTracks(base.ReleaseTrack.ALPHA, base.ReleaseTrack.BETA,
                    base.ReleaseTrack.GA)
class Reject(base.CreateCommand):
  """Rejects a rollout having an Approval state of "Required"."""
  detailed_help = _DETAILED_HELP

  @staticmethod
  def Args(parser):
    resource_args.AddRolloutResourceArg(parser, positional=True)

  def Run(self, args):
    rollout_ref = args.CONCEPTS.rollout.Parse()
    pipeline_ref = rollout_ref.Parent().Parent()
    failed_activity_msg = 'Cannot reject rollout {}.'.format(
        rollout_ref.RelativeName())
    delivery_pipeline_util.ThrowIfPipelineSuspended(pipeline_ref,
                                                    failed_activity_msg)

    console_io.PromptContinue(
        message='Rejecting rollout {}.\n'.format(rollout_ref.RelativeName()),
        cancel_on_no=True)

    return rollout.RolloutClient().Approve(rollout_ref.RelativeName(), False)
